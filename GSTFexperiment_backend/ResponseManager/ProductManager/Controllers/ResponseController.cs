using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlServerCe;
using ResponseManager.Models;
using ProductManager.Util;

namespace ProductManager.Controllers
{
    public class ResponseController : ApiController
    {
        #region Post - Inserir um produto na base de dados
        public HttpResponseMessage Post(Response resposta)//POST que irá inserir um produto na base de dados conforme objeto passado como parâmetro
        {
            //Cria uma mensagem de resposta HTTP
            HttpResponseMessage response = null;

            double endTime_aux;
            Double.TryParse(resposta.endTime, out endTime_aux);
            resposta.endTime_Date = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(endTime_aux).AddHours(-3);

            resposta.startTime_Date = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(resposta.startTime).AddHours(-3);

            //Caso tenha dado algum problema, define a mensagem de resposta com erro
            response = Request.CreateResponse(HttpStatusCode.OK);

            //Caso tenha dado algum problema, define a mensagem personalizada de resposta
            response.Content = new StringContent("");

            Util.FileUtil.appendToCSVFile(resposta, Config.pathFile);

            //Retorna a mensagem http
            return response;

        }
        #endregion
    }
}