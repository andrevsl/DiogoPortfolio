import ftplib
import os

server = 'files.000webhost.com'
username = 'admdiogosouza'
password = '!jb1&#e!asdaerr$$#'
myFTP = ftplib.FTP(server)
myFTP.login(username, password)
myPath = r'C:\Project\Social\Charts Templates\industrial'

def uploadThis(path):
    files = os.listdir(path)
    os.chdir(path)
    for f in files:
        if os.path.isfile(path + r'\{}'.format(f)):
            fh = open(f, 'rb')
            myFTP.storbinary('STOR %s' % f, fh)
            fh.close()
        elif os.path.isdir(path + r'\{}'.format(f)):
            myFTP.mkd(f)
            myFTP.cwd(f)
            uploadThis(path + r'\{}'.format(f))
    myFTP.cwd('..')
    os.chdir('..')
uploadThis(myPath) # now call the recursive function           