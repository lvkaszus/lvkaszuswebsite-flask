#!/bin/bash
gunicorn -c gunicorn_config.py lvwebflask:app