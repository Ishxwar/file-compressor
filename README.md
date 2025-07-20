# file-compressor

Run the RSAkeysgen.ob.js first to generate private and public keys
(it'll create the private.pem and public.pem files)

Run the generator file to generate digital license and it will store it the license in license.lic file

run the file-compressor.exe pass the file to be compressed along with the license file

sample command:   ./file-compressor.exe sample.txt license.lic

To change the license tier and permissions, edit the payload and re-generate the license key
