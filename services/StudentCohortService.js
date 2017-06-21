import { BaseService } from ".";

class StudentCohortService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/student_cohorts_get_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `student-cohorts/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/student_cohorts_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `student-cohorts` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { StudentCohortService };