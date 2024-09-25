import os
from PIL import Image

def convert_tiff_to_png(directory):
    # Iterate over all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".tiff"):
            # Construct the full path to the file
            file_path = os.path.join(directory, filename)
            # Open the image
            with Image.open(file_path) as img:
                # Define the new filename with a .png extension
                png_filename = f"{os.path.splitext(filename)[0]}.png"
                png_path = os.path.join(directory, png_filename)
                # Save the image in PNG format
                img.save(png_path, "PNG")
            # Remove the original TIFF file
            os.remove(file_path)
            print(f"Converted and deleted {file_path}")

# Specify the directory containing the TIFF files
directory = "/Users/Avnoor/Desktop/videoFrames"
convert_tiff_to_png(directory)
