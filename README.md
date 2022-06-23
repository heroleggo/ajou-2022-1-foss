# 오픈소스SW입문 기말 프로젝트

## 주제 : Typescript 기반 서버 프레임워크인 Nestjs 소개

### 목차
 - [OOP란?](#OOP란)
 - [Initialization](#Initialization)

# OOP란

OOP(Object Oriented Programming)은 인스턴스(instance)와 인스턴스 메소드(instance method)를 통해 실제 객체(object)를 생성하는 개념이다.

# Initialization

NestJS를 사용하기 위해 두 가지 방법을 이용할 수 있다.

1. `npm`을 이용한 NestJS CLI 설치 및 사용
2. `npm init` 후 프로젝트 폴더에 NestJS 관련 모듈 `add`

이번 소개에서는 CLI를 활용한 프로젝트 초기화를 진행한다.

1. NestJS CLI 설치
   1. OS별 터미널에서 `npm install -g @nestjs/cli` 실행
   2. `nest new app` 커맨드 실행