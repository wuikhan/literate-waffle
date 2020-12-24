package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".", 
					glue = "stepDefinition", 
					monochrome = true, 
					tags="@smokeTest",
					dryRun = false,
					plugin = { "pretty",
							"html:target/cucumber-reports", 
							"rerun:rerun/failed_scenario.txt" 
							})

public class SmokeTestRunner {

}
