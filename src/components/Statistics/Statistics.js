import PropTypes from 'prop-types';

export const data = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

// export const data = JSON.parse(json);
console.log(data);

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      <li class="item">
        <span class="label">{stats[0].label}</span>
        <span class="percentage">{stats[0].percentage}</span>
      </li>
      <li class="item">
        <span class="label">{stats[1].label}</span>
        <span class="percentage">{stats[1].percentage}</span>
      </li>
      <li class="item">
        <span class="label">{stats[2].label}</span>
        <span class="percentage">{stats[2].percentage}</span>
      </li>
      <li class="item">
        <span class="label">{stats[3].label}</span>
        <span class="percentage">{stats[3].percentage}</span>
      </li>
    </ul>
  </section>
);
