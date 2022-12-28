class Navbar {
    display() {
        document.write(`
        <nav>
            <div class="navbar">
                <a href="./index.html">Home</a>
                <a href="./About.html">About</a>
                <a href='./Covid.html'>Covid-19</a>
                <a href='./Blog.html'>Dental Blog</a>
            <div class="dropdown">
            <button class="dropbtn">Location
                <i class="fa fa-caret-down"></i>
            </button>
             <div class="dropdown-content">
                <a href="https://www.google.com">Google Maps</a>
                <a href="./Location.html">Address</a>
                <a href="./Location.html">Contact Us</a>
                <a href='./Support.html'>Customer Support</a>
                <a href='./Support.html'>Documentation</a>
            </div>
            </div>
            
            <div class="dropdown1">
            <button class="dropbtn1">Account
                <i class="fa1 fa-caret-down1"></i>
            </button>
             <div class="dropdown-content1">
                <a href='./CreateAccount.html'>Create Account</a>
                <a href='./Account.html'>Login</a>
                <a href='./Account.html'>Account Support</a>
                <a href="./ScheduleApp.html">Create an appointment</a>
                <a href="./ScheduleApp.html">Edit an appointment</a>
                <a href="./ScheduleApp.html">Delete an appointment</a>
                <a href='./Calendar.html'>View Calendar</a>
            </div>
            </div>
            
            <div class="dropdown2">
            <button class="dropbtn2">Services
                <i class="fa2 fa-caret-down2"></i>
            </button>
             <div class="dropdown-content2">
                <a href='./Services.html'>Dental Care</a>
                <a href="./Services.html">Cleanings & Checkups</a>
                <a href="./Services.html">Cosmetic Dentistry</a>
                <a href="./Services.html">Dental Work</a>
                <a href='./Services.html'>Invisalign</a>
                <a href='./Services.html'>Implants</a>
                <a href='./Services.html'>Emergency Dentistry</a>
                <a href='./Services.html'>Smile Gallery</a>
            </div>
            </div>
            
            <div class="dropdown3">
            <button class="dropbtn3">Payment
                <i class="fa1 fa-caret-down3"></i>
            </button>
             <div class="dropdown-content3">
                <a href="./Payments.html">Stripe Payment Option</a>
                <a href="./Payments.html">Debit Credit Card</a>
                <a href="./Payments.html">E.B.T.</a>
                <a href="./Payments.html">Paypal</a>
                <a href='./Payments.html'>Schedule Payment Option</a>
                <a href="./Payments.html">Payment History</a>
            </div>
            </div>
            
            </div>
        </nav>`);
    }
}

const Navigation = new Navbar();
Navigation.display();
