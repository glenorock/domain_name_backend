# domain_name_backend
The backend for the project: Sale of domain names online. This is a platform for the sale of domain names online which was done for ANTIC Cameroon

## deployment guide
To deploy the back end, we follow the following steps

1. Type the command npm install
2. Create a file default.json in which you shall input the following data:

## Testing the program
### Testing synchronous functions
The running of the test is done with the aid of the command <b> node test </b>

### Testing asynchronous functions
During the test of asynchronous functions with jasmine, certain problems occured as the later seemed to ignore the async and await tags there by ending the testing before time. The test files where hence made using <b> tests </b> directory, and the launching of the later shall be done with the command <b> node tests/name_of_the_file.js </b>