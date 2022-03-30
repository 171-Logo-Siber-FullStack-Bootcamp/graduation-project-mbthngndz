--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Categories; Type: TABLE; Schema: public; Owner: batuhangunduz
--

CREATE TABLE public."Categories" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    info character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Categories" OWNER TO batuhangunduz;

--
-- Name: Categories_id_seq; Type: SEQUENCE; Schema: public; Owner: batuhangunduz
--

CREATE SEQUENCE public."Categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Categories_id_seq" OWNER TO batuhangunduz;

--
-- Name: Categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: batuhangunduz
--

ALTER SEQUENCE public."Categories_id_seq" OWNED BY public."Categories".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: batuhangunduz
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO batuhangunduz;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: batuhangunduz
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    "imageUrl" character varying(255),
    price double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO batuhangunduz;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: batuhangunduz
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO batuhangunduz;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: batuhangunduz
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: Categories id; Type: DEFAULT; Schema: public; Owner: batuhangunduz
--

ALTER TABLE ONLY public."Categories" ALTER COLUMN id SET DEFAULT nextval('public."Categories_id_seq"'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: batuhangunduz
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: batuhangunduz
--

COPY public."Categories" (id, name, info, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: batuhangunduz
--

COPY public."SequelizeMeta" (name) FROM stdin;
category.js
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: batuhangunduz
--

COPY public.categories (id, title, description, "imageUrl", price, "createdAt", "updatedAt") FROM stdin;
2	Telefon	Iphone 13	http://127.0.0.1:8000/57c2b2f94158588d1d0d612138b19529	14000	2022-03-30 00:02:08.685+03	2022-03-30 00:02:08.685+03
3	Televizyon	Sony	http://127.0.0.1:8000/c0d31ebd5dfb2aaaf042776c60df2e3e	9000	2022-03-30 00:03:09.618+03	2022-03-30 00:03:09.618+03
4	Tablet	Samsung Galaxy	http://127.0.0.1:8000/dfeb0c583ef68b1b909459b7e5017430	5000	2022-03-30 00:04:16.353+03	2022-03-30 00:04:16.353+03
5	Saat	Apple Watch	http://127.0.0.1:8000/ab916887e73f1cf87c9351f46dd68b1c	4000	2022-03-30 00:05:01.161+03	2022-03-30 00:05:01.161+03
6	Ayakkabı	Air Max	http://127.0.0.1:8000/c54d4a05556616dd4ff4d06e9c271d2a	1500	2022-03-30 00:05:28.836+03	2022-03-30 00:05:28.836+03
7	Kozmetik	Ruj	http://127.0.0.1:8000/3e38f6b5bffc2d46253761eba41f2f63	200	2022-03-30 00:06:07.933+03	2022-03-30 00:06:07.933+03
8	Ev-Dekorasyon	Salon Takımı	http://127.0.0.1:8000/ec3a75e461c22108a84cf2b98577deea	8000	2022-03-30 00:06:51.755+03	2022-03-30 00:06:51.755+03
9	Outdoor	Dağcı Çantası	http://127.0.0.1:8000/67a67176189240cec502f6934e30a879	1500	2022-03-30 00:07:14.228+03	2022-03-30 00:07:14.228+03
10	Bilgisayar	Lenovo	http://127.0.0.1:8000/4ff6a96858a6778be6e083e843ab4d07	9500	2022-03-30 00:07:43.247+03	2022-03-30 00:07:43.247+03
11	Çanta	EL Çantası	http://127.0.0.1:8000/896ebfaa94630aa35231993d8e4e5e00	750	2022-03-30 00:08:13.556+03	2022-03-30 00:08:13.556+03
\.


--
-- Name: Categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: batuhangunduz
--

SELECT pg_catalog.setval('public."Categories_id_seq"', 1, false);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: batuhangunduz
--

SELECT pg_catalog.setval('public.categories_id_seq', 11, true);


--
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: batuhangunduz
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: batuhangunduz
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: batuhangunduz
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

