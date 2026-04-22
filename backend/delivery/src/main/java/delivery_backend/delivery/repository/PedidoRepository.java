package delivery_backend.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery_backend.delivery.entity.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {



}