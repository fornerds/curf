import boto3
from botocore.exceptions import ClientError
from app.core.config import settings

s3_client = boto3.client(
    's3',
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
    region_name=settings.AWS_REGION
)

def upload_file_to_s3(file, bucket_name, object_name):
    try:
        s3_client.upload_fileobj(file, bucket_name, object_name)
        cloudfront_url = f"https://{settings.CLOUDFRONT_DOMAIN}/{object_name}"
        return cloudfront_url
    except ClientError as e:
        print(f"Error uploading file to S3: {e}")
        return None

def get_cloudfront_url(object_name):
    return f"https://{settings.CLOUDFRONT_DOMAIN}/{object_name}"

def delete_file_from_s3(bucket_name, object_name):
    try:
        s3_client.delete_object(Bucket=bucket_name, Key=object_name)
    except ClientError as e:
        print(e)
        return False
    return True
