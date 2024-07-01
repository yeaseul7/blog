### MICROSOFT DYNAMICS 365 fetchXML

FetchXml은 Dataverse에서 데이터를 검색하는 데 사용되는 XML 기반 쿼리 언어

쿼리문 작성하는 예시

```javascript
var fetch =
  "<fetch>" +
  "<entity name='new_q112'>" +
  "<attribute name='new_txt_snum' />" +
  "<attribute name='statuscode' />" +
  "<attribute name='new_l_q1' />" +
  "<attribute name='new_name' />" +
  "<attribute name='new_dt_call' />" +
  "<attribute name='new_dt_end' />" +
  "<attribute name='new_dt_start' />" +
  "<attribute name='new_q112id' />" +
  "<attribute name='ownerid' />" +
  "<attribute name='statecode' />" +
  filter +
  "<link-entity name='activitypointer' from='regardingobjectid' to='new_q112id' link-type='outer'>" +
  "<attribute name='createdon' />" +
  "<attribute name='ownerid' />" +
  "<attribute name='activitytypecode' />" +
  "<link-entity name='systemuser' from='systemuserid' to='owninguser' link-type='outer'>" +
  "<attribute name='internalemailaddress' />" +
  "<attribute name='lastname' />" +
  "</link-entity>" +
  "</link-entity>" +
  "<link-entity name='systemuser' from='systemuserid' to='owninguser' link-type='outer'>" +
  "<attribute name='internalemailaddress' />" +
  "<attribute name='fullname' />" +
  "</link-entity>" +
  "</entity>" +
  "</fetch>";

var request = {
  entityName: "new_q112",
  fetchXml: fetch,
  headers: [{ key: "Prefer", value: "odata.include-annotations=*" }],
};

WebApiClient.Retrieve(request);
```

#### return row 제한

[fetch element](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/reference/fetch)를 참고하면 top 속성으로 몇개의 return을 받을 것인지 정할 수 있는데
Default는 5000개 이다.
returntotalrecordcount 속성을 사용하면 5000개보다 더 가져올 수 있다.

---

### 쿼리 작성 방법

**entity 설정 방법**

```javascript
"<entity name='new_q112'>" +
```

**join 설정 방법**

```
<fetch top='5'>
   <entity name='account'>
      <attribute name='name' />
      <link-entity name='contact'
         from='contactid'
         to='primarycontactid'
         link-type='inner'
         alias='contact'>
         <attribute name='fullname' />
      </link-entity>
   </entity>
</fetch>
```

link-entity 속성에는

- name : 관련 table 이름
- from : 매칭할때 관련 있는 컬럼
- to : from 속성에 매칭되는 부모 요소의 컬럼
- link-type(outer, any, not any, all, not all, exusts, in, matchfirstrowusingcrossapply) : 기본 값 : inner
- alias : 결과에 나타날 연관 테이블의 이름
- intersect : 조인하고 열을 반환하지 않는 데 사용됨

**_최대 15개의 요소만 추가할 수 있다._**

[1:n, n:n, 1:1 관계별로 가지고올 수 있는 방법의 예시가 있다.](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/join-tables?tabs=fetchxml)

이밖에도

- [Select columns](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/select-columns?tabs=sdk) Specify which columns of data to return.
- [Join tables](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/join-tables?tabs=fetchxml) Specify which related tables to return in the results.
- [Order rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/order-rows) Specify the sort order of the rows to return.
- [Filter rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/filter-rows?tabs=fetchxml) Specify which rows of data to return.
- [Page results](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/page-results?tabs=sdk) Specify how many rows of data to return with each request.
- [Aggregate data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/aggregate-data) How to group and aggregate the data returned.
- [Count number of rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/count-rows?tabs=sdk) How to get a count of the number of rows returned.
- [Performance optimizations](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/optimize-performance) How to optimize performance

이런 속성을 추가할 수 있다.
[관련 문서](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/overview)
