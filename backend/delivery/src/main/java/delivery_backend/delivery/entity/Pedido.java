package delivery_backend.delivery.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descripcion;
    private Double precio;

    @Enumerated(EnumType.STRING)
    private EstadoPedido estado;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaAceptacion;
    private LocalDateTime fechaEntrega;

    public Pedido() {
        this.fechaCreacion = LocalDateTime.now();
        this.estado = EstadoPedido.PENDIENTE;
    }

    // getters y setters
    public Long getId() { return id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public EstadoPedido getEstado() { return estado; }
    public void setEstado(EstadoPedido estado) { this.estado = estado; }

    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public LocalDateTime getFechaAceptacion() { return fechaAceptacion; }
    public LocalDateTime getFechaEntrega() { return fechaEntrega; }



}