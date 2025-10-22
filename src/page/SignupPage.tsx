import { useState } from 'react';
import Input from '../components/common/Input';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  return (
    <div>
      <Input
        name="nickname"
        placeholder="닉네임"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
        name="email"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        name="passwordCheck"
        type="password"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
      />
      <button>제출하기</button>
      {/* <Input id="이름" name="hi" inputName="input" type="text" />
      <Input id="이메일" name="hi" inputName="input" type="text" />
      <Input id="비밀번호" name="hi" inputName="input" type="text" />
      <Input id="비밀번호 확인" name="hi" inputName="input" type="text" /> */}
    </div>
  );
}
