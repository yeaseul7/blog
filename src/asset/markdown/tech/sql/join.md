## JOIN

![SQL 벤다이어그램](https://shinsangeun.github.io/static/01e7e9696ef5bb2fd340206dea656d4f/cc661/join.webp)

#### INNER JOIN

테이블 간의 교집합이라고 보면 된다.

```sql
예시
SELECT column_name(s)
FROM table1
INNER JOIN table2 ON table1.column_name = table2.column_name;
```

#### LEFT JOIN

A에서 B로 left join = 교집합 + A

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2 ON table1.column_name = table2.column_name;
```

#### RIGHT JOIN

A에서 B로 right join = 교집합 + B

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2 ON table1.column_name = table2.column_name;
```

#### OUTER JOIN

A와 B의 합집합

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;
```

#### CROSS JOIN

Cartesian Product, 곱집합

```sql
SELECT * FROM table1 CROSS JOIN table2;

SELECT * FROM table1 JOIN table2;

SELECT * FROM table1, table2;
```

#### SELF JOIN

한 테이블 내의 row끼리 어떤 계산을 할 때 유용하다.
자기 자신과의 CROSS JOIN이라고 보면 된다.

```sql
SELECT ALIAS_1.column_name, ALIAS_2.column_name, ...
FROM table1 ALIAS_1, table2 ALIAS_2
WHERE ALIAS1.column_name = ALIAS_2.column_name;
```

#### FULL OUTER JOIM

A와 B의 합집합

```sql
select * from a FULL OUTER JOIN b on a.a = b.b;
```

---

[참고자료1](https://stanleykou.tistory.com/entry/SQL-INNER-%EC%A1%B0%EC%9D%B8%EA%B3%BC-OUTER%EC%A1%B0%EC%9D%B8%EC%9D%B4-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94)
[참고자료2](https://shinsangeun.github.io/posts/database/join#google_vignette)
