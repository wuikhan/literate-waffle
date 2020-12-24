$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Accounts.feature");
formatter.feature({
  "line": 1,
  "name": "Test Accounts object",
  "description": "I want to make sure all the fields appear on the account object",
  "id": "test-accounts-object",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the type field and its options",
  "description": "",
  "id": "test-accounts-object;verify-the-type-field-and-its-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"Pa55word\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click the Accounts tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the New button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the type field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the type options",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 2224004793,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 437255601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "AccountTest.I_enter_username_as(String)"
});
formatter.result({
  "duration": 152730539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 21
    }
  ],
  "location": "AccountTest.I_enter_password_as(String)"
});
formatter.result({
  "duration": 77750256,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 1976775229,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 65072111,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_tab()"
});
formatter.result({
  "duration": 359003123,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_button()"
});
formatter.result({
  "duration": 604349313,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_the_type_field()"
});
formatter.result({
  "duration": 35238016,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_the_type_options()"
});
formatter.result({
  "duration": 136939147,
  "status": "passed"
});
formatter.uri("feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Test login functionality",
  "description": "I want to make sure the login functionality is working",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify login functionality using valid credentials",
  "description": "",
  "id": "test-login-functionality;verify-login-functionality-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password as \"Pa55word\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1436307926,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 374082477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "AccountTest.I_enter_username_as(String)"
});
formatter.result({
  "duration": 172988929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 21
    }
  ],
  "location": "AccountTest.I_enter_password_as(String)"
});
formatter.result({
  "duration": 75771967,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 145772652,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 2167326191,
  "status": "passed"
});
});