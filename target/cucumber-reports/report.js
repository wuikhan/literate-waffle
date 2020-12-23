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
  "name": "Verify all the fields are present in the Accounts object",
  "description": "",
  "id": "test-accounts-object;verify-all-the-fields-are-present-in-the-accounts-object",
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
  "duration": 2105303544,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 390887710,
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
  "duration": 156644689,
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
  "duration": 83753340,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 820024429,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 1787477071,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_tab()"
});
formatter.result({
  "duration": 241622246,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_button()"
});
formatter.result({
  "duration": 698935811,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_the_type_field()"
});
formatter.result({
  "duration": 37882221,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_the_type_options()"
});
formatter.result({
  "duration": 128884207,
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
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountTest.I_am_on_the_login_page()"
});
formatter.result({
  "duration": 223436905,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "duration": 116897,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "duration": 50699,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 329932034,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 10098247770,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Accounts\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Waqass-MacBook-Pro.local\u0027, ip: \u00272603:3003:104b:e000:0:0:0:fbf0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/5t/93s4rjfs0hv...}, goog:chromeOptions: {debuggerAddress: localhost:56946}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2871547ad3216ec558e1c8cf10575478\n*** Element info: {Using\u003dlink text, value\u003dAccounts}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinition.AccountTest.I_should_see_the_dashboard(AccountTest.java:46)\n\tat ✽.Then I should see the dashboard(feature/login.feature:11)\n",
  "status": "failed"
});
});