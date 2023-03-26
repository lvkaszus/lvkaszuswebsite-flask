# lvkaszusWebsite - Flask Engine

from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)


@app.route('/')
def index():

    return render_template('index.html')


@app.route('/about_me')
def about_me():
    return render_template('about_me.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/pgp')
def pgp():
    return render_template('pgp.html')

@app.route('/info')
def info():
    return render_template('info.html')


@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return app.send_static_file('sitemap.xml')


@app.errorhandler(401)
def unauthorized(error):
    return redirect('https://your-error-pages-url.com/401.html', code=302), abort(401, silent=True)

@app.errorhandler(403)
def forbidden(error):
    return redirect('https://your-error-pages-url.com/403.html'), 307

@app.errorhandler(404)
def not_found_error(error):
    return redirect("https://your-error-pages-url.com/404.html"), 307

@app.errorhandler(500)
def internal_server_error(error):
    return redirect("https://your-error-pages-url.com/500.html", code=302)

if __name__ == '__main__':
    app.run()