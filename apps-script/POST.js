function postNewAssignTasks(newAssignTaskData) {
  // Utilities.sleep(5000)
  // return true;

  var notSavedRows = [];
  for (var rowNum = 0; rowNum < newAssignTaskData.length; rowNum++) {
    let row = newAssignTaskData[rowNum];
    try {
      var url =
        "https://www.api-pw-internal-utilities.in/task-manager/submit-todo";
      Logger.log(JSON.stringify(row));

      var options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(row),
      };

      var response = UrlFetchApp.fetch(url, options);
      response = JSON.parse(response);
      Logger.log(response);

      if (response) {
        if (!response.success) {
          notSavedRows.push(row);
        }
      }
    } catch (e) {
      // ErrorLog.log(ScriptApp.getScriptId(), "PW-TASK-ALLOCATOR", [e.toString(), "postNewAssignTasks()"]);
      Logger.log(e.toString());
      notSavedRows.push(row);
    }
  }

  Logger.log(notSavedRows);
  if (notSavedRows.length != 0) return notSavedRows;

  return true;
}

function postNewWorkLogs(newAssignTaskData) {
  Utilities.sleep(5000);
  return true;

  var notSavedRows = [];
  for (var rowNum = 0; rowNum < newAssignTaskData.length; rowNum++) {
    let row = newAssignTaskData[rowNum];
    try {
      var url =
        "https://www.api-pw-internal-utilities.in/task-manager/submit-todo";
      Logger.log(JSON.stringify(row));

      var options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(row),
      };

      var response = UrlFetchApp.fetch(url, options);
      response = JSON.parse(response);
      Logger.log(response);

      if (response) {
        if (response.status == "ERROR") {
          notSavedRows.push(row);
        }
      }
    } catch (e) {
      // ErrorLog.log(ScriptApp.getScriptId(), "PW-TASK-ALLOCATOR", [e.toString(), "postNewAssignTasks()"]);
      Logger.log(e.toString());
      notSavedRows.push(row);
    }
  }

  Logger.log(notSavedRows);
  if (notSavedRows.length != 0) return notSavedRows;

  return true;
}
