package delivery_backend.delivery.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import delivery_backend.delivery.entity.Pedido;
import delivery_backend.delivery.repository.ActivosRepository;

@RestController
@RequestMapping("/activos")
public class ActivosController {

    private final ActivosRepository activosRepository;

    public ActivosController(ActivosRepository activosRepository) {
        this.activosRepository = activosRepository;
    }

    @GetMapping
    public List<Pedido> listarActivos() {
        return activosRepository.findAll();
    }

}