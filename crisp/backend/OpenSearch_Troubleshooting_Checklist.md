# OpenSearch Troubleshooting Checklist

## 1. Review Application Metrics

- [ ] Check for any increase in errors during concurrent executions of the Lambda function, specifically looking for HTTP 429 errors (too many requests).
- [ ] Monitor metrics for Maximum CPU utilization and Maximum memory utilization. Record average percentages for reference.
- [ ] Determine if the Lambda function is experiencing cold starts or delays after periods of inactivity. Note any patterns in the function's behavior during overnight hours.

## 2. Assess OpenSearch Configuration

- [ ] Review the current OpenSearch instance type and configuration to ensure it can handle the data volume and frequency of requests.
- [ ] Verify whether the current instance type is suitable for production or if it is recommended only for development environments.

## 3. Execute a Refresh in OpenSearch

- [ ] Run a `refresh` command in OpenSearch to sync the data between DynamoDB and OpenSearch.
- [ ] After the refresh, verify which inspections have updated correctly. Note the count of updated vs. non-updated records and assess if age or other factors may contribute to discrepancies.

## 4. Update Remaining Records Manually

- [ ] For inspections that are not updated, use AppSync to manually toggle the status back and forth to trigger updates.
- [ ] Confirm that the manual changes are reflected correctly in both OpenSearch and the inspection lists in the application.

## 5. Upgrade OpenSearch Instance Type

- [ ] If metrics indicate the need for scaling, upgrade the OpenSearch instance type to a larger option suitable for production (e.g., from `t3.medium.search` to `m5.large.search`).
- [ ] Ensure that the new instance type aligns with current and anticipated data processing needs.

## 6. Conduct Post-Upgrade Testing

- [ ] Create new inspection reports and update existing ones to ensure that the modifications are working as expected.
- [ ] Monitor application metrics after testing to ensure improved performance and check for any new errors or warnings.

## 7. Provide User Communication and Recommendations

- [ ] Notify users when the system is available again and provide specific instructions on what to do if they experience issues.
- [ ] Advise users on expected behavior during non-peak hours, such as possible delays after periods of inactivity.
- [ ] Consider implementing archiving for older records and informing users of expected delays during off-hours. Document any additional steps or cost considerations associated with keeping functions “warm” overnight.

## 8. Monitor and Report

- [ ] Continuously monitor the application and OpenSearch metrics throughout the week to ensure the issues are fully resolved.
- [ ] Collect feedback from users and report any unresolved issues for further analysis and future improvements.
