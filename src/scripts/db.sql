CREATE DATABASE ejemplo;
use ejemplo;
//Relación 1-N
create table carrera(
	id int not null,
    nombre varchar(30)
    
);

ALTER TABLE carrera
	ADD PRIMARY KEY (id);
   
ALTER TABLE carrera 
	MODIFY id int(11) NOT NULL AUTO_INCREMENT=1;
    

create table alumno(
    matricula char(7) NOT NULL,
    nombre varchar(30),
    promedio decimal(5,2),
    idCarrera int 
);

ALTER TABLE alumno 
	ADD PRIMARY KEY (matricula);
    
ALTER TABLE alumno add FOREIGN KEY(idCarrera) REFERENCES carrera(id);

insert into carrera(nombre) values('iti');
insert into alumno(matricula,nombre,promedio, idCarrera) values('1510002','Maria Garcia', 8.5,2);

select * from carrera;
select * from alumno;

//alumno N:N materia

create table materia(
	cve int auto_increment,
        nombre varchar(30)
        primary key(cve)
);

create table alumno_cursa_materia(
	matricula char(7),
	cve_materia int,
	foreign key (matricula) references alumno(matricula),
	foreign key (cve_materia) references materia(cve),
	primary key(matricula,cve_materia)
);

insert into materia(nombre) values('matematicas'),(geografia);
insert into alumno_cursa_materia(matricula,cve_materia) values ('1510001',1),('1510001',2);

// alumno 1:1 domicilio

create table domicilio(
	id int auto_increment,
	calle varchar(20),
	numero int,
        colonia varchar(30),
	ciudad varchar(30),
	matricula char(7) unique
	primary key(id)
	foreign key(matricula) references alumno(matricula)
);

insert into domicilio(calle,numero,colonia,ciudad,matricula) values ('carrera',100,'zaragoza','victoria','1510001')

