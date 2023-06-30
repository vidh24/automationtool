import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { saveAs } from 'file-saver'

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
type ProfileType = {}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // selectedValue :string[] = [];
  showTextbox: boolean = false
  profile!: ProfileType;
  showTextBox: boolean = false;
  testSteps: boolean = false;
  submitClicked: boolean = false;
  isFormValid: boolean = false;
  condition: boolean = false;
  inputValue: string = '';
  textareaValue: string = '';
  linktext: string = '';
  displayedText: string = '';
  submittedText: string = '';
  selectedValue1: string = '';
  selectedValue2: string = '';
  options2: string[] = [];
  inputText: string = '';
  textareaContent: string = '';
  selectedLanguage: string = '';
  generatedCode: string = '';
  previousTextareaContent: string = '';
  codeSnippet: string = '';
  showCodeSnippet: boolean = false;
  inputValues: string[] = [];
  loading: boolean = false;
  private previousSelectedValue1!: string;
  private previousSelectedValue2!: string;
  private selectedValueAdded: boolean = false;
  showPopup: boolean = false;
constructor(private http: HttpClient) {
  }
ngOnInit() {
    this.getProfile();
}
getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
  updateOptions2() {
    this.selectedValue2 = '';
    this.options2 = this.getOptions2(this.selectedValue1);
  }
getOptions2(value: string): string[] {
switch (value) {
      case 'Navigate':
        return [];
      case 'click':
        return ['click - xpath', 'click - id', 'click - class', 'click - DoubleClick',
          'click - moveToElement', 'click - Context click', 'click - clickAndHold',
          'click - Keyup', 'click -Release', 'click - SendKeys', 'click - Drag and drop', 'click - dragAndDrop'];
      case 'sendkey':
        return ['sendkey - xpath', 'sendkey - id', 'sendkey - class', 'sendkey - DoubleClick',
          'sendkey - moveToElement', 'sendkey - Context click', 'sendkey - clickAndHold',
          'sendkey - Keyup', 'sendkey -Release', 'sendkey - SendKeys', 'sendkey - Drag and drop', 'sendkey - dragAndDrop'];
      case 'doubleclick':
        return ['doubleclick - xpath', 'doubleclick - id', 'doubleclick - class', 'doubleclick - DoubleClick',
          'doubleclick - moveToElement', 'doubleclick - Context click', 'doubleclick - clickAndHold',
          'doubleclick - Keyup', 'doubleclick -Release', 'doubleclick - SendKeys', 'doubleclick - Drag and drop', 'doubleclick - dragAndDrop'];

      case 'dragdrop':
        return ['dragdrop - xpath', 'dragdrop - id', 'dragdrop - class', 'dragdrop - DoubleClick',
          'dragdrop - moveToElement', 'dragdrop - Context click', 'dragdrop - clickAndHold',
          'dragdrop - Keyup', 'dragdrop -Release', 'dragdrop - SendKeys', 'dragdrop - Drag and drop', 'dragdrop - dragAndDrop'];

      case 'gettext':
        return ['gettext - xpath', 'gettext - id', 'gettext - class', 'gettext - DoubleClick',
          'gettext - moveToElement', 'gettext - Context click', 'gettext - clickAndHold',
          'gettext - Keyup', 'gettext -Release', 'gettext - SendKeys', 'gettext - Drag and drop', 'gettext - dragAndDrop'];
default:
        return [];
    }
}
updateTextareaContent() {
    this.previousTextareaContent = this.textareaContent;
    this.textareaContent = this.generateSteps();
  }
generateSteps(): string {
    let stepsContent = '';
    let step1Added = false;
    let step2Added = false;
    let step3Added = false;
   if (this.textareaContent) {
      stepsContent += `${this.textareaContent}\n`;
    }
if (this.selectedValue1 !== this.previousSelectedValue1) {
      if (this.selectedValue1 === 'Navigate' && this.inputText) {
        //  stepsContent += `1. navigate to ${this.inputText}\n`;
        this.selectedValueAdded = true;
      } else {
        this.selectedValueAdded = false;
      }
      this.previousSelectedValue1 = this.selectedValue1;
    }
    if (this.selectedValue2 !== this.previousSelectedValue2 && !this.selectedValueAdded) {
      if (this.selectedValue2 === 'click - xpath' && this.inputText) {
        stepsContent += `1. enter username\n`;
        // this.selectedValueAdded = true;
        this.previousSelectedValue2 = this.selectedValue2;
      }
      else if (this.selectedValue2 === 'click - id' && this.inputText) {
        stepsContent += `2. click signin button\n`;
      }
      else if (this.selectedValue2 === 'click - class' && this.inputText) {
        stepsContent += `3.class\n`;
      }
      else if (this.selectedValue2 === 'click - DoubleClick' && this.inputText) {
        stepsContent += `4. verify user logged in succesfully\n`;
      }
      else if (this.selectedValue2 === 'click - moveToElement' && this.inputText) {
        stepsContent += `5. doubleclicked\n`;
      }
      else if (this.selectedValue2 === 'click - Context click' && this.inputText) {
        stepsContent += `6. doubleclicked\n`;
      }
      else if (this.selectedValue2 === 'click - clickAndHold' && this.inputText) {
        stepsContent += `7. doubleclicked\n`;
      }
      else if (this.selectedValue2 === 'click - Keyup' && this.inputText) {
        stepsContent += `8. doubleclicked\n`;
      }
      else if (this.selectedValue2 === 'click - Release' && this.inputText) {
        stepsContent += `9. doubleclicked\n`;

        // this.selectedValueAdded = true;

        //       this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'click - SendKeys' && this.inputText) {
        stepsContent += `10. doubleclicked\n`;

        // this.selectedValueAdded = true;

        //       this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'click - Drag and drop' && this.inputText) {
        stepsContent += `11. doubleclicked\n`;

        // this.selectedValueAdded = true;

        //       this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'click - dragAndDrop' && this.inputText) {
        stepsContent += `12. doubleclicked\n`;

        this.selectedValueAdded = true;

        this.previousSelectedValue2 = this.selectedValue2;

      }

      else if (this.selectedValue2 === 'sendkey - xpath' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - id' && this.inputText) {
        stepsContent += `2. senkey id\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;
      }
      else if (this.selectedValue2 === 'sendkey - class' && this.inputText) {
        stepsContent += `3.sendkey class\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - DoubleClick' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - moveToElement' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - Context click' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - clickAndHold' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - Keyup' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - Release' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - SendKeys' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - Drag and drop' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'sendkey - dragAndDrop' && this.inputText) {
        stepsContent += `4.sendkey doubleclick\n`;

        this.selectedValueAdded = true;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - xpath' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - id' && this.inputText) {
        stepsContent += `2. doubleclick id\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;
      }
      else if (this.selectedValue2 === 'doubleclick - class' && this.inputText) {
        stepsContent += `3.doubleclick class\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - DoubleClick' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - moveToElement' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - Context click' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - clickAndHold' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - Keyup' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - Release' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - doubleclicks' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - Drag and drop' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;
        // this.selectedValueAdded = true;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'doubleclick - dragAndDrop' && this.inputText) {
        stepsContent += `4.doubleclick doubleclick\n`;

        this.selectedValueAdded = true;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - xpath' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - id' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - class' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - DoubleClick' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - moveToElement' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - Context click' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - clickAndHold' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - Keyup' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - Release' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - SenKeys' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - Drag and drop' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'dragdrop - dragAndDrop' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

        this.selectedValueAdded = true;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - xpath' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - id' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - class' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - DoubleClick' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - moveToElement' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - Context click' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - clickAndHold' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - Keyup' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - Release' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - SendKeys' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - Drag and drop' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;

      }
      else if (this.selectedValue2 === 'gettext - dragAndDrop' && this.inputText) {
        stepsContent += `1. Enter password\n`;
        // this.previousSelectedValue2 = this.selectedValue2;
        this.selectedValueAdded = true;
        this.previousSelectedValue2 = this.selectedValue2;
      }
    }
    return stepsContent.trim();
  }
  submitDisabled = false;
  onSubmit() {
    if (this.linktext) {
      // Form is valid, handle the submission
      console.log('Form submitted');
    } else {
      // Form is invalid, display error or handle as needed
      console.log('Please fill in the required field');
    }
    let stepsContent = '';
    this.submitClicked = true;
    this.showTextBox = true;
    this.testSteps = true;
    this.submittedText = this.inputText;
    this.displayedText = this.linktext;
    this.linktext = '';
    this.textareaContent = this.textareaContent ? `${this.textareaContent}\n${stepsContent}` : stepsContent;

    // this.inputText = '';
    this.textareaContent = this.generateSteps();
    if (this.selectedValue1 === 'Navigate') {
      const inputValue = this.inputText; // Store the input value
      this.inputText = ''; // Clear the input field
      // Use the stored input value to update the textarea content
      this.textareaContent += `1. navigate to ${inputValue}\n`;
    }
    else if (this.selectedValue1 === 'click' || this.selectedValue1 === 'sendkey' || this.selectedValue1 === 'doubleclick' || this.selectedValue1 === 'dragdrop' || this.selectedValue1 === 'gettext') {
      // Code for 'OtherOption1', 'OtherOption2', and 'OtherOption3' options
      // ...
      this.inputValues.push(this.inputText);
      this.inputText = '';
    }

    const consoleLogs = [];

    // Push the console outputs into the array
    consoleLogs.push('Input Values:', this.inputValues, 'Textarea Content:', this.textareaContent);

    // Convert the array to a string
    const consoleLogsString = JSON.stringify(consoleLogs);

    // Store the string in the local storage
    localStorage.setItem('consoleLogs', consoleLogsString);
  }
  areAllFieldsSelected(): boolean {
    if (this.selectedValue1 === 'Navigate') {
      return !!this.inputText;
    }
    if (this.selectedValue2 === 'click - xpath') {
      return !!this.inputText; // Adjust the condition based on your requirement
    }

    if (this.selectedValue2 === 'click - id') {
      return !!this.inputText; // Adjust the condition based on your requirement
    }
    if (this.selectedValue2 === 'sendkey - xpath') {
      return !!this.inputText; // Adjust the condition based on your requirement
    }
    if (this.selectedValue2 === 'sendkey - id') {
      return !!this.inputText; // Adjust the condition based on your requirement
    }

    // Add conditions for other options in the first dropdown if needed

    return false;
  }
  generateCode() {
    // Retrieve the stored values from local storage
    const inputValuesString = localStorage.getItem('inputValues');
    const textareaContent = localStorage.getItem('textareaContent');

    // Check if the selected language is not empty
    if (this.selectedLanguage) {
      // Prepare the payload to send to the API
      const payload = {
        model: "gpt-3.5-turbo", // Replace with the desired model name

        // Update with the appropriate parameter name for the input content
        messages: [
          {
            role: 'system',
            content: `You (UserRole: Automation Tester): ${this.textareaContent}`, // Include user role in the content
          },
          {
            role: 'system',
            content: `Language (UserRole: Automation Tester): ${this.selectedLanguage}`, // Include user role in the content
          },
        ]
      };
      // Set the API key in the request headers
      const apiKey = 'Bearer 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'; // Replace with your actual API key
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'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'}`
      });

      // Send the payload to the API using an HTTP POST request
      this.showPopup = true;
      this.loading = true;

      this.http.post('https://api.openai.com/v1/chat/completions', payload, { headers }).subscribe({
        next: (response: any) => {
          const generatedCode = response.choices[0].message.content;
          // Extract the generated code from the API response
          // const generatedCode = response.generatedCode;

          // Update the generatedCode variable to display the generated code in the textarea
          this.generatedCode = generatedCode;
          this.loading = false;

          // this.showTextarea = true;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error generating code:', error);
          console.log('API error:', error.error); // Log the detailed error response
          this.generatedCode = 'Error generating code. Please try again.';
          this.loading = false;
        }
      });
    }
  }
  saveContent(){
    const codeWithLanguage = {
      language: this.selectedLanguage,
      code: this.generatedCode
    };
  
    // Convert the codeWithLanguage object to a string
    const codeString = JSON.stringify(codeWithLanguage, null, 2);
  
    // Create a Blob object with the code string
    const blob = new Blob([codeString], { type: 'text/plain;charset=utf-8' });
  
    // Generate a file name with the selected language and extension
    const fileName = `file.${this.selectedLanguage.toLowerCase()}`;
  
    // Save the file using FileSaver.js
    saveAs(blob, fileName);
  
  }
  clearContent(){
    this.generatedCode = ''; // Reset the value to an empty string
  }
  closePopup() {
    // Close the popup only if the flag is set to true
    if (this.showPopup) {
      this.showPopup = false;
    }
  }
  
    
  }


   
