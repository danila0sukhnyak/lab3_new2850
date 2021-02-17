package model;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.*;

@Entity
@Table(name = "points_xy")
public class Point {

    @Id
    @Column(name = "id", nullable = false)
    private long id;
    @Column(name = "x", nullable = false)
    private Double x;
    @Column(name = "y", nullable = false)
    private Double y;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "point")
    private Set<PointHistoryElement> pointHistoryElements;


    public Point(Double x, Double y) {
        this.pointHistoryElements = new LinkedHashSet<>();
        this.x = x;
        this.y = y;
        this.id = new Date().getTime();
    }

    public Point() {
    }

    public long getId() {
        return id;
    }

    public Double getX() {
        return x;
    }

    public Double getY() {
        return y;
    }


    public Double getR() {
        return getLastHistoryElement().getR();
    }


    public String getIsCheck() {
        return getLastHistoryElement().getIsCheck();
    }

    public String getDate() {
        return new SimpleDateFormat("dd.MM.yy, HH:mm:ss").format(new Date(id));
    }


    public Set<PointHistoryElement> getPointHistoryElements() {
        return pointHistoryElements;
    }

    public List<PointHistoryElement> getHistory() {
        ArrayList<PointHistoryElement> historyElements = new ArrayList<>(getPointHistoryElements());
        historyElements.sort((p1, p2) -> p1.getId() > p2.getId() ? -1 : 1);
        return historyElements;
    }

    public PointHistoryElement getLastHistoryElement() {
        return getHistory().get(0);
    }
    public void addHistoryElement(PointHistoryElement element) {
        pointHistoryElements.add(element);
    }
    public void deleteHistoryElement(PointHistoryElement element) {
        pointHistoryElements.remove(element);
    }
    public void deleteAllHistoryElement() {
        ArrayList<PointHistoryElement> historyElements = new ArrayList<>(getPointHistoryElements());
        for(PointHistoryElement phe : historyElements){
            pointHistoryElements.remove(phe);
        }
    }
}