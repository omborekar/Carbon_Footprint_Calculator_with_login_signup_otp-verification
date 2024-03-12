from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import random
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

app.secret_key = 'xyzsdfg'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '0701'  # Replace with your MySQL password
app.config['MYSQL_DB'] = 'login'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

def send_otp_email(email, otp):
    from_email = 'omborekar18@gmail.com'  # Replace with your Gmail email
    password = 'nshqgrjgerarieex'  # Replace with your Gmail app password

    subject = 'OTP Verification'
    message = f'Welcome to CO2 footprint Calculator\n\n\tYour OTP for registration: {otp}\n\n\t©CO2 Footprint Calculator'

    msg = MIMEText(message)
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = email

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(from_email, password)
            server.sendmail(from_email, [email], msg.as_string())
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def generate_otp():
    return str(random.randint(100000, 999999))

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    message = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM user WHERE email = %s AND password = %s', (email, password))
        user = cursor.fetchone()
        cursor.close()
        if user:
            session['loggedin'] = True
            session['userid'] = user['userid']
            session['name'] = user['name']
            session['email'] = user['email']
            message = 'Logged in successfully!'
            return render_template('index.html', message=message)
        else:
            message = 'Please enter correct email/password!'
    return render_template('login.html', message=message)

@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('userid', None)
    session.pop('email', None)
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    message = ''
    if request.method == 'POST':
        username = request.form['name']
        password = request.form['password']
        email = request.form['email']

        if not username or not password or not email:
            message = 'Please fill out the form!'
        else:
            otp = generate_otp()
            session['otp'] = otp
            session['username'] = username
            session['password'] = password
            session['email'] = email

            if send_otp_email(email, otp):
                return redirect(url_for('otp_verification'))

            message = 'Error sending OTP. Please try again.'

    return render_template('register.html', message=message)

@app.route('/otp_verification', methods=['GET', 'POST'])
@app.route('/otp_verification', methods=['GET', 'POST'])
def otp_verification():
    message = ''
    
    if request.method == 'POST':
        user_otp = ''.join([request.form[f'otp{i+1}'] for i in range(6)])

        if user_otp == session.get('otp'):
            # Check if email already exists in the database
            cursor = mysql.connection.cursor()
            cursor.execute('SELECT * FROM user WHERE email = %s', (session.get('email'),))
            existing_user = cursor.fetchone()

            if existing_user:
                message = 'Email already registered. Please log in.'
                return render_template('register.html', message=message)

            # Insert new user if email is not duplicate
            cursor.execute('INSERT INTO user (name, email, password) VALUES (%s, %s, %s)',
                           (session.get('username'), session.get('email'), session.get('password')))
            mysql.connection.commit()
            cursor.close()

            message = 'You have successfully registered!'
            session.pop('username', None)
            session.pop('password', None)
            session.pop('email', None)
            session.pop('otp', None)
            return render_template('login.html', message=message)
        else:
            message = 'Invalid OTP. Please try again.'

    return render_template('verify.html', message=message)


if __name__ == "__main__":
    app.run(debug=True)
