function putToDoData() {
  return true;
}

function putPreviousAssignTask() {
  return true;
}

function putPreviousWorkLog() {
  return true;
}

// function post_workLogData(workLogData) {

//   var notSavedRows = [];
//   for (var rowNum = 0; rowNum < workLogData.length; rowNum++) {
//     let row = workLogData[rowNum];
//     try {
//       var url = 'https://www.api-pw-internal-utilities.in/task-manager/submit-todo';
//       Logger.log(JSON.stringify(row))

//       var options = {
//         "method": "post",
//         "contentType": "application/json",
//         "payload": JSON.stringify(row)
//       };

//       var response = UrlFetchApp.fetch(url, options)
//       response = JSON.parse(response)
//       Logger.log(response)

//       if (response) {
//         if (response.status == "ERROR") {
//           notSavedRows.push(row.todo_details)
//         }
//       }

//     } catch (e) {
//       // ErrorLog.log(ScriptApp.getScriptId(), "PW-TASK-ALLOCATOR", [e.toString(), "post_workLogData()"]);
//       Logger.log(e.toString())
//       notSavedRows.push(row.todo_details)
//     }
//   }

//   Logger.log(notSavedRows)
//   if (notSavedRows.length != 0) return notSavedRows;

//   return true;

// }
