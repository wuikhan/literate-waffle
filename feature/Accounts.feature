Feature: Test Accounts object
  I want to make sure all the fields appear on the account object
  
  Scenario: Verify the type field and its options
    Given I open chrome browser
    And I am on the login page
    And I enter username as "test.user@gmail.com.test"
    And I enter password as "Pa55word"
    When I click the login button
    Then I should see the dashboard
    And I click the Accounts tab
    And I click the New button
	  And I should see the type field
	  And I should see the type options
