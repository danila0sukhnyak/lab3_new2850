package model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "point_r_history")
public class PointHistoryElement {
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "point_id", nullable = false)
    private Point point;
    @Column(name = "r", nullable = false)
    private Double r;
    @Column(name = "ch", nullable = false)
    private String isCheck;

    public PointHistoryElement() {
    }

    public PointHistoryElement(Point point, double r) {
        this.point = point;
        this.r = r;
        double x = point.getX();
        double y = point.getY();
        System.out.println(r);
        System.out.println(x);
        System.out.println(y);
        boolean is = ((x >= 0 && y >= 0 && r >= Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) || (x <= 0 && x >= -r*1/2 && y <= 0 && y >= -r && y >= -2*x - r) || ( x <= r && x >= 0 && y >= -r/2 && y <= 0));
        System.out.println(is);
        this.isCheck = is ? "Yes" : "No";
        this.id = new Date().getTime();
    }

    public long getId() {
        return id;
    }

    public Double getR() {
        return r;
    }

    public String getIsCheck() {
        return isCheck;
    }
}
