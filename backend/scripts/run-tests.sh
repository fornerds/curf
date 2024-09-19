#!/bin/bash

# Activate virtual environment if you're using one
# source /path/to/your/venv/bin/activate

# Set environment variables for testing
export TESTING=1

# Run pytest with coverage
pytest --cov=app --cov-report=term-missing --cov-report=html

# Deactivate virtual environment if you activated it
# deactivate
