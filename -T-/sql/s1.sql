
set timing on
set linesize 250

-----1----------------------------1 минута

select count(EMPLOYEE_ID) 
from EMPLOYEES 
where EMPLOYEE_ACTIVE = 0;

-----2----------------------------2 минуты

select distinct(L.LOCATION_NAME) 
from LOCATIONS L, COORDS C 
where C.ENTITY_ID = 0 and C.LOCATION_ID = L.LOCATION_ID;

-----3----------------------------5 минут

select O.OFFICE_NAME, count(F.FLOOR_ID) 
from FLOORS F, OFFICES O 
where O.OFFICE_ID = F.OFFICE_ID 
group by O.OFFICE_NAME 
order by count(F.FLOOR_ID) desc;

-----4----------------------------10 минут

select CONTRACT_NAME, LOCATION_NUMBER 
from (
	select C.CONTRACT_NAME, count(L.LOCATION_ID) as LOCATION_NUMBER
	from CONTRACTS C, LOCATIONS L 
	where C.CONTRACT_ID = L.CONTRACT_ID 
	group by C.CONTRACT_NAME
) 
where LOCATION_NUMBER > 5;

-----5.1----------------------------20 минут

select OFFICES.OFFICE_NAME 
from FLOORS, OFFICES
where FLOORS.FLOOR_ID = ( 
	select FLOOR_ID 
	from COORDS 
	where ENTITY_ID = (
		select EMPLOYEE_ID 
		from EMPLOYEES 
		where BIRTH_DATE = (
			select max(BIRTH_DATE) 
			from EMPLOYEES
		)
	)
) and OFFICES.OFFICE_ID = FLOORS.OFFICE_ID;

-----5.2----------------------------15 минут

select OFFICE_NAME from (
	select O.OFFICE_NAME, E.BIRTH_DATE 
	from OFFICES O 
	join FLOORS F on O.OFFICE_ID = F.OFFICE_ID 
	join COORDS C on F.FLOOR_ID = C.FLOOR_ID
	join EMPLOYEES E on C.ENTITY_ID = E.EMPLOYEE_ID
	order by E.BIRTH_DATE desc
)
where rownum = 1;

-----6----------------------------10 минут

select E.EMPLOYEE_ID, G.GROUP_NAME, F.FLOOR_NAME, O.OFFICE_NAME 
from EMPLOYEES E 
join GROUPS G on E.GROUP_ID = G.GROUP_ID and G.GROUP_NAME in ('Администрация', 'Менеджеры')
join COORDS C on E.EMPLOYEE_ID = C.ENTITY_ID
join FLOORS F on C.FLOOR_ID = F.FLOOR_ID
join OFFICES O on F.OFFICE_ID = O.OFFICE_ID; 
