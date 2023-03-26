#lvkaszusWebsite-Flask - GUnicorn Configuration File

# Set workers
workers = 1

# Set threads
threads = 5

# Set the bind address (IP_ADDRESS:PORT_NUMBER) where GUnicorn will be accessible from
bind = '0.0.0.0:8000'

# Set the timeout for worker processes
timeout = 120

# Set the location of the access log file
accesslog = '/var/log/lvwebflask/access.log'

# Set the location of the error log file
errorlog = '/var/log/lvwebflask/error.log'