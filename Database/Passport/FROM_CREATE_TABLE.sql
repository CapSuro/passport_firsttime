--------------------------------------------------------
--  DDL for Table FORM
--------------------------------------------------------

  CREATE TABLE "PASSPORT"."FORM" 
   (	"FORMID" NUMBER(12,0), 
	"FORMDATE" DATE, 
	"NAME" VARCHAR2(50 BYTE), 
	"GENDER" VARCHAR2(5 BYTE), 
	"BIRTHDAY" DATE, 
	"BIRTHPLACE" VARCHAR2(5 BYTE), 
	"PID" VARCHAR2(15 BYTE), 
	"PIDDATE" DATE, 
	"PIDPLACE" VARCHAR2(15 BYTE), 
	"NATION" VARCHAR2(5 BYTE), 
	"RELIGION" VARCHAR2(5 BYTE), 
	"ADDRESSPROVINCE" VARCHAR2(5 BYTE), 
	"ADDRESSDISTRICT" VARCHAR2(5 BYTE), 
	"ADDRESSSTREET" VARCHAR2(200 BYTE), 
	"TEMPPROVINCE" VARCHAR2(5 BYTE), 
	"TEMODISTRICT" VARCHAR2(5 BYTE), 
	"TEMPSTREET" VARCHAR2(200 BYTE), 
	"JOB" VARCHAR2(200 BYTE), 
	"JOBADDRESS" VARCHAR2(200 BYTE), 
	"FATHERFULLNAME" VARCHAR2(50 BYTE), 
	"FATHERBIRTHDAY" DATE, 
	"MOTHERFULLNAME" VARCHAR2(50 BYTE), 
	"MOTHERBIRTHDAY" DATE, 
	"HUSBANDWIFENAME" VARCHAR2(50 BYTE), 
	"HUSBANDWIFEBIRTHDAY" DATE, 
	"LASTPASSPORTNUMBER" VARCHAR2(50 BYTE), 
	"LASTPASSPORTDATE" DATE, 
	"TASK" VARCHAR2(5 BYTE), 
	"TASKNOTE" VARCHAR2(200 BYTE), 
	"APOINTMENTPROVINCE" VARCHAR2(5 BYTE), 
	"APOINTMENTADDRESS" VARCHAR2(200 BYTE), 
	"FORMSTATE" VARCHAR2(5 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index FORM_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "PASSPORT"."FORM_PK" ON "PASSPORT"."FORM" ("FORMID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table FORM
--------------------------------------------------------

  ALTER TABLE "PASSPORT"."FORM" MODIFY ("FORMID" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("FORMDATE" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("GENDER" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("BIRTHDAY" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("BIRTHPLACE" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("ADDRESSPROVINCE" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("ADDRESSDISTRICT" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" MODIFY ("ADDRESSSTREET" NOT NULL ENABLE);
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "FORM_PK" PRIMARY KEY ("FORMID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table FORM
--------------------------------------------------------

  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "BIRTHPLACE_PROVINCE_FK" FOREIGN KEY ("BIRTHPLACE")
	  REFERENCES "PASSPORT"."PROVINCE" ("PROVINCEID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "PIDPLACE_PROVINCE_FK" FOREIGN KEY ("PIDPLACE")
	  REFERENCES "PASSPORT"."PROVINCE" ("PROVINCEID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "NATION_NATION_FK" FOREIGN KEY ("NATION")
	  REFERENCES "PASSPORT"."NATION" ("NATIONID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "RELIGION_RELITION_FK" FOREIGN KEY ("RELIGION")
	  REFERENCES "PASSPORT"."RELIGION" ("RELIGIONID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "ADDPROVINCE_PROVINCE_FK" FOREIGN KEY ("ADDRESSPROVINCE")
	  REFERENCES "PASSPORT"."PROVINCE" ("PROVINCEID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "TEMPPROVINCE_PROVINCE_FK" FOREIGN KEY ("TEMPPROVINCE")
	  REFERENCES "PASSPORT"."PROVINCE" ("PROVINCEID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "TASK_TASK_FK" FOREIGN KEY ("TASK")
	  REFERENCES "PASSPORT"."TASK" ("TASKID") ENABLE;
  ALTER TABLE "PASSPORT"."FORM" ADD CONSTRAINT "APOINTMENT_PROVINCE_FK" FOREIGN KEY ("APOINTMENTPROVINCE")
	  REFERENCES "PASSPORT"."PROVINCE" ("PROVINCEID") ENABLE;