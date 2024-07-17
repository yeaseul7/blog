export const NodeAWS = `### AWS Free tier Node.js 배포하기

### 사전 경로

- 회원가입
- 메뉴 -> 모든 서비스
- EC2 선택

### 기본 화면

![아마존 기본 화면](https://yeaseul7.github.io/neekoBlog/images/amazone1.png)

여기서 '인스턴스 시작'을 선택한다.

#### EC2란?

Amazone Elastic Compute Cloud가 곧 EC2다.
가상컴퓨터를 가지고 이용자가 그 컴퓨터를 임대 받아 자신의 애플리케이션을 실행할 수 있게 하는 서비스이다.

#### 인스턴스란?

가상머신을 아마존에서 인스턴스라고 부른다.
이 인스턴스는 AMI(아마존 가상머신 이미지)로 부팅된다.

### 이미지 (AMI)설정

이 단계는 서버 컴퓨터 종류를 선택하는 것이다.
![아마존 이미지](https://yeaseul7.github.io/neekoBlog/images/amazoneImg.png)

### 인스턴스 선택

위의 이미지에 부팅할 가상 머신을 선택하는 단계이다.
![아마존 인스턴스](https://yeaseul7.github.io/neekoBlog/images/amazondeInstance.png)

### 키페어

키페어는 데이터를 암호화하는 데 사용하는 public key와 데이터를 해독하는 데 사용하는 private key를 조합한 것이다.
[관련 안내서](https://docs.aws.amazon.com/ko_kr/servicecatalog/latest/adminguide/getstarted-keypair.html)

이 키페어는 서버로 접속하기 위한 인증서이다.
백업이 반드시 필요하다고 한다.
![아마존 키페어](https://yeaseul7.github.io/neekoBlog/images/amazoneKey.png)

### 네트워크 설정

#### VPC란?

Amazon Virtual Private Cloud
사용자들로 하여금 클라우드 내에서 자신만의 가상 네트워크를 설정하고 운영할 수 있도록 한다.
VPC를 사용하면 다른 사용자의 네트워크와 격리된 환경을 제공받아서 보안이 강화된다.
네트워크 설정, IP 주소 범위, 서브넷 구성, 라우팅 테이블, 게이트웨이를 조정할 수 있다.
![VPC](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/images/how-it-works.png)

#### 게이트웨이, 서브넷

게이트웨이 : 컴퓨터 네트워크에서 서로 다른 통신망, 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 컴퓨터나 소프트웨어
서브넷 : 네트워스 내부의 네트워크
`;
