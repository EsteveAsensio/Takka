package delivery_backend.delivery.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import delivery_backend.delivery.entity.EstadoPedido;
import delivery_backend.delivery.entity.Pedido;
import delivery_backend.delivery.repository.PedidoRepository;
import org.springframework.data.domain.Sort;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll(Sort.by(Sort.Direction.DESC, "fechaCreacion"));
    }

    public Pedido save(@RequestBody Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public Pedido aceptarPedido(Long id) {
        Pedido pedido = pedidoRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        if (pedido.getEstado() != EstadoPedido.PENDIENTE) {
            throw new RuntimeException("El pedido ya fue aceptado");
        }

        pedido.setEstado(EstadoPedido.ACEPTADO);

        return pedidoRepository.save(pedido);
    }
}