# Export File System

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8. This application allows user to export the selected files.
- Re-usable components such as Export and Dashboard. The Export alert popup is a highly generic component that can be used as-is.
- SCSS variables are used for easier maintenance and reusability.
- Unit test cases with 100% coverage.
- Utilizing angular directive for more efficient and optimized code.
- Added disclaimer - only available files can be downloaded

------------------------------------------------------------------------------------------------------------------------------
## Pre-requisites  
Before running this project, ensure you have the following installed:

- **Node.js - latest version( Recommended : v20.18.3)** 
  - Install: https://nodejs.org/en/download
  - Check version:
    ```bash
      node -v
     ```
    ```bash
      npm -v
     ```
- **Angular CLI**
  - Install:
    ```bash
       npm install -g @angular/cli
     ```
  - Check version:  
    ```bash
     ng version
     ```

## Run the web application   
- git clone https://github.com/PrernaKukreti/export-file-system.git
- cd export-file-system
- To install dependencies 
```bash
npm install
```
- To start a local development server, run:
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## To build the project

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
```bash
ng test --code-coverage
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Future functionalities 
- Implementation of the export functionality via excel sheet.
- Service implementation to get the actual file details






## Author
👤 Prerna Kukreti
📧 Email: kukretiprerna05@gmail.com
