import React, { useCallback, useState } from 'react';
import { useLogin } from 'components/Hooks/useLogin';
import { supabase } from 'libs/supabase';
export const Submission: React.FC = () => {
  const { userId } = useLogin();
  const titles = ['word', 'url'];
  const holder = [
    'あなたの好きな作品のセリフや一節を入力してください',
    '入力した作品のリンクを入力してください',
  ];
  const [form, setForm] = useState({
    word: '',
    url: '',
  });

  const handleChange = useCallback(
    (input) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => {
        return { ...prevForm, [input]: e.target.value };
      });
    },
    [],
  );
  const submission = async () => {
    const { data, error } = await supabase
      .from('wordbox')
      .insert([{ user_id: userId, word: form.word, url: form.url }]);
  };
  console.log(form.word);
  console.log(form.url);

  return (
    <div>
      <div className='min-h-screen  flex items-center'>
        <div className='container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300'>
          <div className='py-12 p-10 bg-white rounded-xl'>
            {Object.entries(form).map(([value], i) => (
              <div className='mb-6' key={i}>
                <label
                  className='mr-4 uppercase text-gray-700 font-bold inline-block mb-2'
                  htmlFor='name'
                >
                  {titles[i]}
                </label>
                <input
                  type='text'
                  className='border text-xs text-black bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded'
                  placeholder={holder[i]}
                  onChange={handleChange(value)}
                />
              </div>
            ))}

            <button
              onClick={submission}
              className='w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'
            >
              ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
