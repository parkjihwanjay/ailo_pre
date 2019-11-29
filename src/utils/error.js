const errorHandling = e => {
	if (e.response.status === 400) alert('잘못된 입력입니다.');
	else if (e.response.status === 401) alert('로그인을 해주세요.');
	else if (e.response.status === 404) alert('해당 정보를 불러 올 수 없습니다. 죄송합니다.');
	else alert('서버 에러입니다. 죄송합니다 ㅜㅜ');
};

export { errorHandling };
