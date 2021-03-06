package beans;

import model.Point;
import model.PointHistoryElement;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;
import java.io.IOException;
import java.io.Serializable;




public class AreaCheckerBean implements Serializable {
    private Double x;
    private Double y;
    private Double xCanvas;
    private Double yCanvas;
    private String resizeResult;
    private Double r;

    private DataBean bean;

    public Double getxCanvas() {
        return xCanvas;
    }

    public void setxCanvas(Double xCanvas) {
        this.xCanvas = xCanvas;
    }

    public Double getyCanvas() {
        return yCanvas;
    }

    public void setyCanvas(Double yCanvas) {
        this.yCanvas = yCanvas;
    }

    public AreaCheckerBean() {
        r = 1.0;
        x = 1.0;
        y = 1.0;
    }

    public Double getX() {
        return x;
    }


    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public String getResizeResult() {
        return resizeResult;
    }

    public void setResizeResult(String resizeResult) {
        this.resizeResult = resizeResult;
    }

    public void check() {
        Point p = new Point(getX(), getY());
        PointHistoryElement element = new PointHistoryElement(p, getR());
        p.addHistoryElement(element);
        bean.addPoint(p);
        bean.addElement(element);
        resizeResult = p.getIsCheck();
    }

    public void canvasCheck() {
        System.out.println("New dotXXX"+getX());
        System.out.println("New dotYYY"+getY());
        Point p = new Point(xCanvas, yCanvas);
        PointHistoryElement element = new PointHistoryElement(p, r);
        p.addHistoryElement(element);
        bean.addPoint(p);
        bean.addElement(element);
        resizeResult = p.getIsCheck();
    }

    public void resizeCheck() {
        Point p = new Point(xCanvas, yCanvas);
        p.addHistoryElement(new PointHistoryElement(p, r));
        resizeResult = p.getIsCheck();
    }

    public void setBean(DataBean bean) {
        this.bean = bean;
    }

    public boolean getReady() {
        return x != null && y != null && r != null;
    }

//    public void handleSlider(SlideEndEvent event) {
//        setY((double) event.getValue());
//    }
    public void setR(double r_int){
        r = r_int;
    }
}
