import { StatisticCard } from './StatisticCards';
import { StatisticTitle } from './StatisticTitle';
import { Statisctics } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
        <Statisctics>
            <StatisticTitle title={title} />
            <StatisticCard stats={stats} />
        </Statisctics>
    );
};

export default Statistics;
