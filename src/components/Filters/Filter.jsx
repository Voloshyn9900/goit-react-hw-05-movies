import { useSearchParams } from 'react-router-dom';

export const TopicFilter = () => {
  const [params, setParams] = useSearchParams();
  const topic = params.get('topic') ?? '';

  const updateTopic = value => {
    params.set('topic', value);
    setParams(params);
  };

  return (
    <input
      value={topic}
      type="text"
      placeholder="Topic filter"
      onChange={e => updateTopic(e.target.value)}
    ></input>
  );
};
