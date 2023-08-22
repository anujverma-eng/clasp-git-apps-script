function doGet(e) {
  const template = HtmlService.createTemplateFromFile("Index");
  return template
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setTitle("PW-Task-Allocator");
  // this is the actual comment
}

function getDetails() {
  const activeUser = Session.getActiveUser().getEmail();
  const ss = SpreadsheetApp.openById(
    "1iPNpxdt5SsrfacK_J7UyvJSQRX8zVxLpqCEiN8x-DZc"
  );
  const shTeamData = ss
    .getSheetByName("Team Details")
    .getDataRange()
    .getDisplayValues();

  let drop_down_data = ss
    .getSheetByName("Dynamic Dropdown")
    .getDataRange()
    .getDisplayValues();
  drop_down_data.shift();

  let owner_sub_owner_drop_down = [...new Set(shTeamData.map((row) => row[2]))];
  owner_sub_owner_drop_down.shift();

  const emailIdColumn = 2 - 1;
  const userNameColumn = 3 - 1;
  const roleColumn = 4 - 1;
  const departmentColumn = 5 - 1;
  const teamDataColumn = 6 - 1;
  const categoryColumn = 7 - 1;

  const userDetails = shTeamData.filter(
    (row) => row[emailIdColumn].toString() == activeUser
  )[0];

  const user_obj = {
    email_id: activeUser,
    user_name: userDetails[userNameColumn],
    role: userDetails[roleColumn],
    department: userDetails[departmentColumn]
      .toString()
      .split(",")
      .filter((row) => row != ""),
    team_data: userDetails[teamDataColumn]
      .toString()
      .split(",\n")
      .filter((row) => row != ""),
    category: userDetails[categoryColumn],
    data_from_db: {
      my_todo: [{}, {}, {}],
      prev_work_log: [{}, {}, {}],
      prev_assign_tasks: [{}, {}, {}],
    },
    drop_down_data,
    owner_sub_owner_drop_down,
    start_date: "2023-08-01",
    end_date: "2023-08-11",
  };
  Logger.log(user_obj);

  if (userDetails) {
    return user_obj;
  } else {
    return null;
  }
}
