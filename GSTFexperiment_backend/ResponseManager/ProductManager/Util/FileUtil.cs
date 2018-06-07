using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using ResponseManager.Models;

namespace ProductManager.Util {
    public static class FileUtil {

        public static string getContentFile() {
            return File.ReadAllText("d:\\DZHosts\\LocalUser\\wilkoliveira\\www.wilkoliveira.somee.com\\config.ini");
        }

        public static void appendToCSVFile(Response response, string pathCSVFile) {
            StringBuilder stringToCSV = new StringBuilder();

            stringToCSV.Append("startTime;endTime;gender;age;testType;pretestPoints;activityPoints;posttestPoints").AppendLine();
            stringToCSV.AppendFormat("{0};{1};{2};{3};{4};{5};{6};{7}",
                response.startTime_Date.ToString("dd/MM/yyyy HH:mm:ss"),
                response.endTime_Date.ToString("dd/MM/yyyy HH:mm:ss"),
                response.gender,
                response.age,
                response.testType,
                response.pretestPoints,
                response.activityPoints,
                response.posttestPoints
                ).AppendLine();

            stringToCSV.AppendLine().AppendLine("pre;post");
            for (int iCount = 0; iCount < response.pre.Count; iCount++) {
                stringToCSV.AppendFormat("{0};{1}", response.pre[iCount], response.post[iCount]).AppendLine();
            }

            if (!(File.Exists(pathCSVFile))) {
                StreamWriter file = File.CreateText(pathCSVFile);
                file.WriteLine(stringToCSV.ToString());
                file.Close();
            } else
                File.AppendAllText(pathCSVFile, Environment.NewLine + Environment.NewLine + stringToCSV.ToString());
        }
    }
}