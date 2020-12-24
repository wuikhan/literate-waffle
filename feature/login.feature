
Feature: Test login functionality
  I want to make sure the login functionality is working

  @smokeTest
  Scenario: Verify login functionality using valid credentials
    Given I open chrome browser
    And I am on the login page
    And I enter username as "test.user@gmail.com.test"
    And I enter password as "Pa55word"
    When I click the login button
    Then I should see the dashboard
 