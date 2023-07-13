import PropTypes from 'prop-types';
import './Statistics.css';

export const data = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

console.log(data);

const getBgcolor = variant => {
  switch (variant) {
    case 'green':
      return 'green';
    case 'red':
      return 'red';
    case 'blue':
      return 'blue';
    case 'yellow':
      return 'yellow';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const StatisticsComponent = ({ label, percentage, variant }) => {
  return (
    <li style={{ backgroundColor: getBgcolor(variant) }} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
};

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      <StatisticsComponent
        label={stats[0].label}
        percentage={stats[0].percentage}
        variant="green"
      />
      <StatisticsComponent
        label={stats[1].label}
        percentage={stats[1].percentage}
        variant="red"
      />
      <StatisticsComponent
        label={stats[2].label}
        percentage={stats[2].percentage}
        variant="blue"
      />
      <StatisticsComponent
        label={stats[3].label}
        percentage={stats[3].percentage}
        variant="yellow"
      />
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};
