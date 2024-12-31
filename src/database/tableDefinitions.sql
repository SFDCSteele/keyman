CREATE TABLE IF NOT EXISTS public.volunteers
( 
    "UID" integer NOT NULL DEFAULT nextval('"volunteers_UID_seq"'::regclass),
    "firstName" character(50) COLLATE pg_catalog."default",
    "lastName" character(50) COLLATE pg_catalog."default",
    email character(50) COLLATE pg_catalog."default",
    cell character(20) COLLATE pg_catalog."default",
    "deviceType" "char",
    "publisherType" character(20) COLLATE pg_catalog."default",
    CONSTRAINT volunteers_pkey PRIMARY KEY ("UID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.volunteers
    OWNER to postgres;



CREATE TABLE IF NOT EXISTS public.timeReporting
(
    "UID" integer NOT NULL DEFAULT nextval('"timeReporting_UID_seq"'::regclass),
    "volunteer_UID" integer NOT NULL,
    "hourDate" date,
    "hourType" character(20) COLLATE pg_catalog."default",
    "fieldServiceHours" double precision,
    "creditHours" double precision,
    CONSTRAINT timeReporting_pkey PRIMARY KEY ("UID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.timeReporting
    OWNER to postgres;