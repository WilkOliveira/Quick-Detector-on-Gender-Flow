using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ResponseManager.Models
{
    public class Response
    {
        /*
            CREATE TABLE [Produto] (
                [id] int IDENTITY (1,1) NOT NULL,
                [descricao] nvarchar(100) NOT NULL,
                [id_categoria] int NULL,
                [preco] float NOT NULL
            );
            GO

            ALTER TABLE [Produto] ADD CONSTRAINT [PK_Produto] PRIMARY KEY ([id]);
            GO
            ALTER TABLE [Produto] ADD CONSTRAINT [FK_Produto] FOREIGN KEY ([id_categoria]) REFERENCES Categoria ([id]);
            GO
         */

        public double startTime { get; set; }
        public DateTime startTime_Date { get; set; }
        public string endTime { get; set; }
        public DateTime endTime_Date { get; set; }
        public string gender { get; set; }
        public string age { get; set; }
        public string testType { get; set; }
        public int pretestPoints { get; set; }
        public int activityPoints { get; set; }
        public int posttestPoints { get; set; }
        public List<object> pre { get; set; }
        public List<object> post { get; set; }

        public Response() { }

        public Response(int startTime, string endTime, string gender, string age, string testType, int pretestPoints, int activityPoints, int posttestPoints, List<object> pre, List<object> post) {
            this.startTime = startTime;
            this.endTime = endTime;
            this.gender = gender;
            this.age = age;
            this.testType = testType;
            this.pretestPoints = pretestPoints;
            this.activityPoints = activityPoints;
            this.posttestPoints = posttestPoints;
            this.pre = pre;
            this.post = post;

        }
    }
}