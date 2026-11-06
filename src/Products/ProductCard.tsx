export default function ProductCard({ name, count }) {
    return (
        <div className="content-card content-card-width">
            <h3>{name}</h3>
            <p>{count}</p>
        </div>
    );
}