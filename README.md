# uft-create-aos-account
# Description
This UFT test creates a new account in AOS

# Usage
The test was created with both web and WPF add-ins loaded. You can delete the WPF add-in if you like.

All values are hard coded except for the account name to  create.

If the account already exists, the test will fail with an error message in the test report.

<b>You</b> are responsible for creating a new username in the excel spreadsheet prior to running.

The script closes all open copies of Internet Explorer, than launches a new copy of IE to the AOS running on Nimbus Server
