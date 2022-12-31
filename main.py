#importing flask and flask cors to establish a secure connection between front end and backend service.
######################################################################################################

from flask import Flask, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__)





#By cors policy allowing backend url to access frontend services via a secure connection

rootr = {
    "origins": ["http://irctcbackend.herokuapp.com"]
}

cors = CORS(app, resources={"*": rootr})
app.config['CORS_HEADERS'] = 'Content-Type'





#ALL API FOR ADMIN FUNCTIONALITY

#render api for project landing page

@app.route('/')
def landing():
    return render_template("landing.html")





#render apt for the project main page

@app.route('/first')
def first():
    return render_template("index.html")




#render api for admin login page

@app.route('/adminlock')
def adminlock():
    return render_template("adminlock.html")




#render api for admin page

@app.route('/admin')
def admin():
    return render_template("admin.html")




#render api for adding a train

@app.route('/admin/tinsert')
def tinsert():
    return render_template("tinsert.html")




#render api for editing train information

@app.route('/admin/trainedit')
def trainedit():
    return render_template("trainedit.html")




#render api for removing train

@app.route('/admin/tdelete')
def tdelete():
    return render_template("tdelete.html")




#render api for adding a coach

@app.route('/admin/cinsert')
def cinsert():
    return render_template("cinsert.html")




#render api for editing a coach

@app.route('/admin/coach/edit')
def c_change():
    return render_template("coachedit.html")




#render api for removing a coach

@app.route('/admin/cdelete')
def cdelete():
    return render_template("cdelete.html")




#render api for all admin ticket information

@app.route('/admin/viewticket')
def adminticket():
    return render_template("admintickets.html")




#render api for reject a reservation or ticket

@app.route('/admin/cticket')
def cancelticket():
    return render_template("cancelticket.html")




#render api for a all in one mothertable

@app.route('/admin/mother_table')
def momo():
    return render_template("mothertable.html")




#render api for all feedbacks

@app.route('/admin/showfeed')
def showfeed():
    return render_template("showfeed.html")




#render api for getting a time table

@app.route('/timetable')
def timetable():
    return render_template("timetable.html")




#ALL API FOR USER FUNCTIONALITY
#render api for user login

@app.route('/userlock')
def userlock():
    return render_template("userlock.html")





#render api for reset password

@app.route('/user/forgotpassword')
def forgotpass():
    return render_template("forgotpassword.html")




#render api for user page

@app.route('/user')
def user():
    return render_template("user.html")




#render api for register page

@app.route('/register')
def register():
    return render_template("register.html")




#render api for train view and searching

@app.route('/tview')
def tview():
    return render_template("tview.html")




#render api for coach view and searching 

@app.route('/cview')
def cview():
    return render_template("cview.html")




#render api for booking seats or making reservation

@app.route('/bookseats')
def bookseats():
    return render_template("bookseats.html")




#render api for getting booked tickets

@app.route('/viewticket')
def ticket():
    return render_template("ticket.html")




#render api to cancel ticket or reservation

@app.route('/cancelticket')
def cticket():
    return render_template("cticket.html")




#render api to post a Feedback 

@app.route('/write')
def wrtous():
    return render_template("navailable.html")




#ALL API FOR SUPER ADMIN FUNCTIONALITY
#render api for super admin login page

@app.route('/superadminlock')
def superlock():
    return render_template("superadminlock.html")




#render api for super admin home page

@app.route('/superadmin')
def super():
    return render_template("superadmin.html")




#render api for adding admin to the system

@app.route('/superadmin/ainsert')
def admininsert():
    return render_template("ainsert.html")




#render api for changing information about an admin

@app.route('/superadmin/achange')
def adminchange():
    return render_template("adminedit.html")




#render api for removing admin from the system

@app.route('/superadmin/adelete')
def admindelete():
    return render_template("adelete.html")




#render api for showing all admins active on system

@app.route('/superadmin/showadmin')
def alladmin():
    return render_template("alladmin.html")




#render api for no resources

@app.route('/not_available')
def naval():
    return render_template("navailable.html")




#render api for documentation

@app.route('/doc')
def doc():
    return render_template("documentation.html")

if __name__ == "__main__":
    app.run(debug=True)

#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!